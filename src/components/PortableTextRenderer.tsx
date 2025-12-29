'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const components: PortableTextComponents = {
    types: {
        // Handle inline images from Sanity's rich text editor
        image: ({ value }) => {
            if (!value?.asset?._ref && !value?.asset?._id) return null

            const imageUrl = urlFor(value).width(1200).quality(90).url()

            return (
                <figure className="my-8">
                    <Image
                        src={imageUrl}
                        alt={value.alt || 'Image'}
                        width={1200}
                        height={800}
                        className="rounded-lg w-full h-auto"
                        style={{ objectFit: 'contain' }}
                    />
                    {value.caption && (
                        <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
        // Handle custom inline image type if defined in schema
        inlineImage: ({ value }) => {
            if (!value?.asset?._ref && !value?.asset?._id) return null

            const imageUrl = urlFor(value).width(1200).quality(90).url()

            return (
                <figure className="my-8">
                    <Image
                        src={imageUrl}
                        alt={value.alt || 'Image'}
                        width={1200}
                        height={800}
                        className="rounded-lg w-full h-auto"
                        style={{ objectFit: 'contain' }}
                    />
                    {value.caption && (
                        <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
    },
    block: {
        // Heading styles with proper hierarchy and spacing
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-900">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-bold mt-4 mb-2 text-gray-900">{children}</h4>
        ),
        h5: ({ children }) => (
            <h5 className="text-lg font-bold mt-4 mb-2 text-gray-900">{children}</h5>
        ),
        h6: ({ children }) => (
            <h6 className="text-base font-bold mt-4 mb-2 text-gray-900">{children}</h6>
        ),
        // Blockquote with elegant styling
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-umich-maize bg-yellow-50 pl-6 pr-4 py-4 italic my-6 text-gray-700 rounded-r-lg">
                {children}
            </blockquote>
        ),
        // Normal paragraph
        normal: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
        ),
    },
    marks: {
        // Text formatting
        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <u className="underline">{children}</u>,
        'strike-through': ({ children }) => <s className="line-through">{children}</s>,
        code: ({ children }) => (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">
                {children}
            </code>
        ),
        // Link annotation with smart targeting
        link: ({ value, children }) => {
            const href = value?.href || '#'
            // Check if external link (starts with http/https and not our domain)
            const isExternal = href.startsWith('http') && !href.includes('paintinga2.com')

            return (
                <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-umich-navy hover:text-umich-maize underline decoration-umich-maize decoration-2 underline-offset-2 transition-colors"
                >
                    {children}
                </a>
            )
        },
    },
    list: {
        // Unordered list
        bullet: ({ children }) => (
            <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-700">{children}</ul>
        ),
        // Ordered list
        number: ({ children }) => (
            <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-700">{children}</ol>
        ),
        // Checkbox list if supported
        checkmarks: ({ children }) => (
            <ul className="list-none ml-4 mb-4 space-y-2 text-gray-700">{children}</ul>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed">{children}</li>,
        checkmarks: ({ children }) => (
            <li className="flex items-start gap-2">
                <span className="text-umich-maize">✓</span>
                <span>{children}</span>
            </li>
        ),
    },
}

interface PortableTextRendererProps {
    value: any // eslint-disable-line @typescript-eslint/no-explicit-any
    className?: string
}

export default function PortableTextRenderer({ value, className = '' }: PortableTextRendererProps) {
    if (!value) return null

    return (
        <div className={`portable-text-content ${className}`}>
            <PortableText value={value} components={components} />
        </div>
    )
}
