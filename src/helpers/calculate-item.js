export const calculateTotalPrice = (data, key) => {

    let categoriesSet = key === 'category' ? new Set() : null;

    const sumValue = data.reduce((sum, item) => {
      let value = 0;

      if (['price', 'value'].includes(key)) {
        value = parseFloat(item[key]?.replace('$', '')) || 0;
      }

      if (key === 'totalPrice') {
        const price = parseFloat(item.price?.replace('$', '')) || 0;
        value = item.quantity * price;
      }

      else if (key === "outOfStock") {
        value = item.quantity === 0 ? 1 : 0;
      }

      else if (key === 'category') {
        categoriesSet.add(item.category);
        return sum;
      }

      return sum + value;
    }, 0);

    return key === 'category' ? categoriesSet.size : sumValue;
  };
