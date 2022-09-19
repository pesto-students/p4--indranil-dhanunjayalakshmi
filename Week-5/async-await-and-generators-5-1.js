async function doTask1(str)
{
    console.log(str + " Task 1 completed");
}

async function doTask2(str)
{
    console.log(str + " Task 2 completed");
}

async function doTask3(str)
{
    console.log(str + " Task 3 completed");
}

async function asyncRunner()
{
    console.log("----Using Async/await-----");
    await doTask1("Async");
    await doTask2("Async");
    await doTask3("Async");
}

asyncRunner();

function * generatorRunner()
{
    console.log("----Using generators-----");
    yield doTask1("Generator");
    yield doTask2("Generator");
    yield doTask3("Generator");
}

let runner = generatorRunner();
runner.next();
runner.next();
runner.next();
