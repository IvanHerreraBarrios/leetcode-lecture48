var processQueries = function(queries, m) {
    const p = []
    for(let i=1; i <= m; i++){
        p.push(i)
    }
    const result = []
    for(let elem of queries){
        const pos = p.indexOf(elem)
        result.push(pos)
        p.unshift(p.splice(pos, 1)[0])
    }
    return result
};