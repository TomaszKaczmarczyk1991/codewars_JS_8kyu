function abbrevName(name){
    const splitted = name.toUpperCase().split(' ');
    const initials = `${splitted[0][0]}.${splitted[1][0]}`
    return initials;
}