function fromJSONToHTMLTable(json) {
    const rows = JSON.parse(json);
    const escape = (value) => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const html = ['<table>'];
    html.push(`   <tr>${Object.keys(rows[0]).map((k) => `<th>${escape(k)}</th>`).join('')}</tr>`);
    for (const row of rows) {
        html.push(`   <tr>${Object.values(row).map((v) => `<td>${escape(v)}</td>`).join('')}</tr>`);
    }
    html.push('</table>');
    console.log(html.join('\n'));
}

module.exports = fromJSONToHTMLTable;
