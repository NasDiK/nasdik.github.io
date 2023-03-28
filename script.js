document.getElementById('signingGenerator').addEventListener('click', () => {
  getContractLinks();
})

const getContractLinks = () => {
  let contractUuid = prompt('Введите линк uuid contract: ');
  if (!contractUuid) {
    return;
  }
  let signingUuids = [];


  let text;
    while(![null, ''].includes(text)) {
      text = prompt(`signingUuid[${signingUuids.length+1}]: `);
      ![null, ''].includes(text) && signingUuids.push(text);
    }

  signingUuids.forEach(uuid => {
    const link = `https://app.esoft.team/public/contract/${contractUuid}/signing/${uuid}`;
    
    document.getElementById('openLink').checked && window.open(link, '_blank');
    console.log(link);
  });
};

window.getContractLinks = getContractLinks;