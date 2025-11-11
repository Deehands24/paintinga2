'use client';

import React, { useState } from 'react';
import { trackLead } from './Analytics';

const FormInput = ({ label, type, name, value, onChange, placeholder, min, step }: {
    label: string;
    type: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    placeholder?: string;
    min?: string | number;
    step?: string | number;
}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            step={step}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
    </div>
);

const FormSelect = ({ label, name, value, onChange, options }: {
    label: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options: { value: string, label: string }[];
}) => (
     <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
            {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    </div>
);

export const EstimateCalculator: React.FC<{ businessName?: string }> = ({ businessName }) => {
    const [step, setStep] = useState<'form' | 'contact' | 'result'>('form');
    const [formData, setFormData] = useState({
        projectType: 'interior',
        squareFootage: 1500,
        wallCondition: 'good',
        numDoors: 5,
        numWindows: 5,
        paintQuality: 'standard',
        includeCabinets: false,
        numCabinetDoors: 0,
        numCabinetDrawers: 0,
    });
    const [contactInfo, setContactInfo] = useState({ phone: '', email: '' });
    const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
             const { checked } = e.target as HTMLInputElement;
             setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
             setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value }));
        }
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfo(prev => ({...prev, [name]: value}));
    };

    const calculateEstimate = () => {
        let baseCost = 0;
        const { squareFootage, paintQuality, wallCondition, numDoors, numWindows, includeCabinets, numCabinetDoors, numCabinetDrawers } = formData;

        const sqFtRate = paintQuality === 'premium' ? 3.75 : 2.75;
        baseCost += squareFootage * sqFtRate;
        baseCost += numDoors * 60;
        baseCost += numWindows * 50;

        if (includeCabinets) {
            baseCost += numCabinetDoors * 110;
            baseCost += numCabinetDrawers * 65;
        }

        if (wallCondition === 'minor_repairs') baseCost *= 1.2;
        if (wallCondition === 'major_repairs') baseCost *= 1.5;

        const min = Math.round(baseCost * 0.9 / 10) * 10;
        const max = Math.round(baseCost * 1.1 / 10) * 10;

        setEstimate({ min, max });
        setStep('contact');
    };

    const revealEstimate = async (e: React.FormEvent) => {
        e.preventDefault();
        if(contactInfo.phone || contactInfo.email) {
            // Send lead to your email via simple webhook
            try {
                const leadData = {
                    timestamp: new Date().toISOString(),
                    business: businessName || 'PaintingA2 (Homepage)',
                    contact: contactInfo,
                    project: formData,
                    estimate: estimate,
                    source: window.location.href
                };

                // Send lead to email via FormSubmit
                await fetch('https://formsubmit.co/ajax/paintinga2@ges-development.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: 'New PaintingA2 Lead',
                        email: contactInfo.email || 'No email provided',
                        phone: contactInfo.phone || 'No phone provided',
                        message: `
LEAD DETAILS
===========
Business: ${businessName || 'PaintingA2 Homepage'}
Timestamp: ${leadData.timestamp}

CONTACT INFO
===========
Email: ${contactInfo.email || 'Not provided'}
Phone: ${contactInfo.phone || 'Not provided'}

PROJECT DETAILS
===========
Square Footage: ${formData.squareFootage} sq ft
Wall Condition: ${formData.wallCondition}
Doors: ${formData.numDoors}
Windows: ${formData.numWindows}
Paint Quality: ${formData.paintQuality}
Cabinets: ${formData.includeCabinets ? 'Yes' : 'No'}
${formData.includeCabinets ? `Cabinet Doors: ${formData.numCabinetDoors}\nCabinet Drawers: ${formData.numCabinetDrawers}` : ''}

ESTIMATE
===========
Range: $${estimate?.min.toLocaleString()} - $${estimate?.max.toLocaleString()}

Source URL: ${leadData.source}
                        `
                    })
                });

                // Track lead in Google Analytics
                trackLead(businessName, estimate);

                // Log to console
                console.log("✅ Lead captured:", leadData);

                setStep('result');
            } catch (error) {
                console.error("Lead submission error:", error);
                setStep('result'); // Still show result even if logging fails
            }
        } else {
            alert("Please provide a phone number or email to see your estimate.");
        }
    };

    const renderForm = () => (
        <form onSubmit={(e) => { e.preventDefault(); calculateEstimate(); }} className="space-y-6">
            <fieldset className="p-4 border border-gray-200 rounded-md">
                <legend className="text-lg font-medium text-blue-600 px-2">Project Basics</legend>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FormInput label="Total Square Footage to Paint" type="number" name="squareFootage" value={formData.squareFootage} onChange={handleFormChange} min="100" step="50" />
                    <FormSelect label="Wall Condition" name="wallCondition" value={formData.wallCondition} onChange={handleFormChange} options={[
                        { value: 'good', label: 'Good (no repairs needed)' },
                        { value: 'minor_repairs', label: 'Minor Repairs (small holes, cracks)' },
                        { value: 'major_repairs', label: 'Major Repairs (large holes, water damage)' },
                    ]}/>
                    <FormInput label="Number of Doors to Paint" type="number" name="numDoors" value={formData.numDoors} onChange={handleFormChange} min="0" />
                    <FormInput label="Number of Windows to Paint (trim)" type="number" name="numWindows" value={formData.numWindows} onChange={handleFormChange} min="0" />
                    <FormSelect label="Paint Quality" name="paintQuality" value={formData.paintQuality} onChange={handleFormChange} options={[
                        { value: 'standard', label: 'Standard Quality (e.g. Sherwin-Williams SuperPaint)' },
                        { value: 'premium', label: 'Premium Quality (e.g. Sherwin-Williams Emerald)' },
                    ]}/>
                </div>
            </fieldset>

            <fieldset className="p-4 border border-gray-700 rounded-md">
                 <legend className="text-lg font-medium text-blue-900 px-2">Kitchen Cabinets</legend>
                 <div className="mt-4 space-y-4">
                     <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="includeCabinets" name="includeCabinets" type="checkbox" checked={formData.includeCabinets} onChange={handleFormChange} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="includeCabinets" className="font-medium text-gray-900">Include cabinet painting?</label>
                            <p className="text-gray-900">Select this to add cabinet refinishing to your estimate.</p>
                        </div>
                    </div>
                    {formData.includeCabinets && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                            <FormInput label="Number of Cabinet Doors" type="number" name="numCabinetDoors" value={formData.numCabinetDoors} onChange={handleFormChange} min="0" />
                            <FormInput label="Number of Cabinet Drawers" type="number" name="numCabinetDrawers" value={formData.numCabinetDrawers} onChange={handleFormChange} min="0" />
                        </div>
                    )}
                 </div>
            </fieldset>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button type="submit" className="w-full md:w-auto bg-yellow-400 text-gray-900 font-bold py-3 px-12 rounded-lg hover:bg-yellow-500 transition-colors duration-300 text-lg shadow-md hover:shadow-xl">
                        Calculate My Estimate
                    </button>
                </div>
            </div>
        </form>
    );

    const renderEstimateDisplay = () => (
        <div className="relative">
            <div className={`text-center p-8 border-4 border-dashed border-blue-500 rounded-lg transition-all duration-500 ${step !== 'result' ? 'blur-md' : ''}`}>
                <p className="text-lg text-gray-900">Your Estimated Project Cost</p>
                <p className="text-5xl font-extrabold text-blue-600 my-2">
                    ${estimate?.min.toLocaleString()} - ${estimate?.max.toLocaleString()}
                </p>
                <p className="text-sm text-gray-900">*This is a budget estimate. A formal quote requires an in-person consultation.</p>
            </div>
             {step === 'contact' && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center p-4">
                     <form onSubmit={revealEstimate} className="bg-white p-6 rounded-lg shadow-xl border w-full max-w-md text-center">
                        <h3 className="text-xl font-bold text-gray-800">Unlock Your Estimate!</h3>
                        <p className="text-gray-800 mt-2 mb-4">Enter your phone or email below to instantly see your project estimate.</p>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={contactInfo.phone}
                                    onChange={handleContactChange}
                                    placeholder="(555) 555-5555"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-900 rounded-md shadow-sm placeholder-gray-800 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={contactInfo.email}
                                    onChange={handleContactChange}
                                    placeholder="you@example.com"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-6 bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-xl">
                           Verify & See My Price
                        </button>
                    </form>
                </div>
            )}
        </div>
    );

    const renderResult = () => (
        <div>
            {renderEstimateDisplay()}
            <div className="text-center mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                <p className="mt-2 text-green-700">Your estimate is shown above. {businessName ? `${businessName} may reach out to you shortly` : 'A local professional may reach out to you shortly'} to provide a more detailed quote.</p>
                <p className="mt-4 text-sm text-green-600">To find more painters, please visit our directory.</p>
            </div>
        </div>
    );

    return (
        <div className="w-full">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Get Your Free Estimate</h2>
                    <p className="mt-2 text-lg text-gray-900">Instant project cost calculator for your Ann Arbor painting project</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    {step === 'form' && renderForm()}
                    {(step === 'contact' || step === 'result') && (step === 'contact' ? renderEstimateDisplay() : renderResult())}
                </div>
            </div>
        </div>
    );
};
