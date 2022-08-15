const ObjectDeep = (obj: any, compare: { key: string, value: string }) => {
    let result = {};

    for (let obj_key in obj) {

        let item = obj[obj_key];

        // console.log(compare.value + "==" + item.id + " -- " + (compare.value == item.id));

        if (typeof item[compare.key] != "undefined" && item[compare.key] === compare.value) {
            return item;
        }
        if (typeof item.children != "undefined" && Object.keys(result).length < 1) {
            result = ObjectDeep(item.children, compare);
        }

    }
    return result;
}
export default ObjectDeep;
