
function findAllPaths(graph) {
    let paths = [];
    const dfs = (index, path) => {
        if(path[path.length - 1] == graph.length - 1) {
            paths.push(path);
            return;
        }
        for(let i = 0; i < graph[index].length; i++) {
            dfs(graph[index][i], [...path, graph[index][i]]);
        }
    }
    dfs(0, [0]);
    return paths;
};

console.log(findAllPaths([[4,3,1],[3,2,4],[3],[4],[]]));

console.log(findAllPaths([[1,2],[3],[3],[]]));