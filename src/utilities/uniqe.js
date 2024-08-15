export const isUnique = (arr, obj) => {
    return !arr.some((item) => item.name === obj.name);
};