export interface Mapper<I, O> {
    mapFrom(input: I): O;
    mapTo(output: O): I;
}