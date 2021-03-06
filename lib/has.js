import keysEq from './_keysEq'
/**
 * Determines if object has the given key(s).
 * @param {Object} object 
 * @param {any} key Could be everything: String, an array of strings, or a function that returns a boolean.
 * @param {?boolean} strict If true and `key` is an array, returns true if `key` is exactly equal to object keys.
 * @returns {boolean}
 */

export default function(object, key, strict){
	if (Array.isArray(key)){
        let _keys = Object.keys(object)
        if (strict){
            return keysEq(_keys, key)
        } else {
            return _keys.filter(e => key.includes(e)).every(e => e in object)
        }
    }
	else if (typeof key === 'function') {
		let res = []
		Object.entries(object).forEach(e => {
			let [keyName, value] = e,
			returnedFromCB = key.apply(null, [keyName, value])
			res.push(returnedFromCB)
		})
		return !res.length ? false : !!res.find(Boolean)
	}
	else return key in object
}