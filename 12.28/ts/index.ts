function greeter(person: string) {
    return  "Hello" + person;
}
let user = "jane";
document.body.innerHTML = greeter(user);