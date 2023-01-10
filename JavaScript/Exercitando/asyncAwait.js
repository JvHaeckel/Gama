function firstFunction() {
    console.log("Hey ");
}

async function secondFunction() {

    console.log("Started");

    await firstFunction();

    console.log("Now started it");
}