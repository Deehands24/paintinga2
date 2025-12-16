const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: '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',
});

const db1 = '2cbe00facf1e801295ede37becc7e2f5';
const db2 = '2cbe00facf1e80aa9c0ad9a72a27c12d';

async function check() {
    try {
        const d1 = await notion.databases.retrieve({ database_id: db1 });
        console.log(`DB 1 (${db1}): ${d1.title[0]?.plain_text}`);
    } catch (e) {
        console.log(`DB 1 Error: ${e.message}`);
    }

    try {
        const d2 = await notion.databases.retrieve({ database_id: db2 });
        console.log(`DB 2 (${db2}): ${d2.title[0]?.plain_text}`);
    } catch (e) {
        console.log(`DB 2 Error: ${e.message}`);
    }
}

check();
