export const jsonParserHelper = (data: any): object => {
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}