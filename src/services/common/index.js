
// eslint-disable-next-line import/no-anonymous-default-export
export default (api) => {

    const getInventoryData = () => {
        return api.get(`/inventory`);
    };

    return {
        getInventoryData
    };
};
