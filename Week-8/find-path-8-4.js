function findPath(graph, discovered, source, destination)
{
  if(discovered.has(source))
  {
    return discovered;
  }
  discovered.add(source);
  if(source === destination) return discovered;
  else
  {
    if(graph[source].has(destination))
    {
      discovered.add(destination);
      return discovered;
    }
    
    for(let v of graph[source])
    {
      if(!discovered.has(destination))
      {
        if(graph[v].has(destination))
        {
          discovered.add(destination);
          return discovered;
        }
        discovered = findPath(graph, discovered, v, destination);
      }
      else
      {
        return discovered;
      }
    }
  }
  return discovered;
}

function graph_impl(vertices, edges, source, destination)
{
  const graph = Array(vertices).fill(0);

  for(let i = 0; i < vertices; i++)
  {
    graph[i] = new Set();
  }

  edges.forEach(edge => {
    let parent = edge[0], child = edge[1];
    graph[parent].add(child);
    graph[child].add(parent);
  });

  let discovered = new Set();
  discovered = findPath(graph, discovered, source, destination);
  if(discovered.has(destination)) console.log(true);
  else console.log(false);
}

graph_impl(3, [[0,1],[1,2],[2,0]], 0, 2);
graph_impl(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5);
graph_impl(5, [[0,2],[1,2],[1,3],[2,4],[4,3]], 2, 3);
graph_impl(4, [[0,2],[2,3],[3,0]], 1, 0);
