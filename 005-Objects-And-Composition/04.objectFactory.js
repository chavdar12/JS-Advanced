function factory(library, orders) {
    return orders.map(({ template, parts }) => {
        const product = { ...template };
        for (const part of parts) {
            product[part] = library[part];
        }
        return product;
    });
}

module.exports = factory;
