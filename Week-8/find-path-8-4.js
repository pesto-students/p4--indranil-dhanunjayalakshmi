function findPath(graph, source, destination)
{
  if(source === destination) return false;
  if(graph[source].has(destination)) return true;
  for(let v in graph[source])
  {
    if(graph[v].has(destination)) return true;
  }
  return false;
}

function graph_impl(vertices, edges, source, destination)
{
  const graph = new Set();
  for(let i = 0; i < vertices; i++)
  {
    graph[i] = new Set();
  }

  edges.forEach(edge => {
    let parent = edge[0], child = edge[1];
    graph[parent].add(child);
    graph[child].add(parent);
  });

  console.log(findPath(graph, source, destination));
}

graph_impl(3, [[0,1],[1,2],[2,0]], 0, 2);
graph_impl(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5);
