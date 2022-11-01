const user = {
    setterName(name) {
        this.name = name;
        return this;
    }
}
user.setterName("jack");
console.log(user.setterName("milad"))