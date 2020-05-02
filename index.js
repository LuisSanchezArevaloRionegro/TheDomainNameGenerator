function getDomain() {
    
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let domainName = '';

    for (let z of noun) {
        for (let x of adj) {
            for (let i of pronoun) {
                domainName = i + x + z + ('.com');
                document.getElementById('domain').appendChild(document.createElement('p')).innerHTML = domainName;
            }
        }
    }

}

window.onload = getDomain;