export function chunkifyArray(a, n, balanced) {
    
    if (n < 2)
        return [a];
  
    var len = a.length,
            out = [],
            i = 0,
            size;
  
    if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, i += size));
        }
    }
  
    else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, i += size));
        }
    }
  
    else {
  
        n--;
        size = Math.floor(len / n);
        if (len % size === 0)
            size--;
        while (i < size * n) {
            out.push(a.slice(i, i += size));
        }
        out.push(a.slice(size * n));
    }
  
    return out;
  }

export function isNotInViewport(rect) {
    return (
        rect.top > (window.innerHeight || document.documentElement.clientHeight) ||
        rect.bottom < 0 
    );
}
  
// export function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }