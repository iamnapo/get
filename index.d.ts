/**
Get `path` of `object`, returning `defaultValue` if it doesn‘t exist.
```
import get from "@iamnapo/get";
get([4, 5], "[0]"); // => 4
get({ a: { b: 1 } }, "a.b"); // => 1
get("napo", "[1]"); // => "a"
get({ a: { b: 1 } }, "a.c", "blah"); // => "blah"
```
*/
declare function get(object: object | Array<any> | string, path: string, defaultValue?: any): any;
export = get;
