
function findPath(graph, source, target)
{
  let isPath = false;
  let discovered = new Set();
  const dfs = (index, path) => {
      if(path[path.length - 1] == target) {
          isPath = true;
          return;
      }
      for(let i = 0; i < graph[index].length; i++)
      {
        if(!isPath)
        {
          if(!discovered.has(graph[index][i]))
          {
            discovered.add(graph[index][i]);
            dfs(graph[index][i], [...path, graph[index][i]]);  
          }
        }
        else
        {
          i = graph[index].length;
        } 
      }
  }
  dfs(source, [source]);
  return isPath;
};

function graph_impl(vertices, edges, source, target)
{
  const graph = Array(vertices).fill(0).map(() => Array());

  edges.forEach(edge => {
    let parent = edge[0], child = edge[1];
    graph[parent].push(child);
    graph[child].push(parent);
  });

  console.log(findPath(graph, source, target));
}

graph_impl(3, [[0,1],[1,2],[2,0]], 0, 2);
graph_impl(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5);
graph_impl(5, [[0,2],[1,2],[1,3],[2,4],[4,3]], 2, 3);
graph_impl(4, [[0,2],[2,3],[3,0]], 1, 0);