const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawAll(){
  let readOutCardDiv = document.getElementById('readOutDiv')

let stringInsertion = ''

  for(let i = 0; i < packages.length; i++){

    stringInsertion += 

    `<div class="card text-center" style="width: 20%;">
              <div class="card-body">
                <h5 class="card-title">${packages[i].trackingNumber}</h5>
                <div>
                  <b>Priority Level:</b>
                  <p>${packages[i].priorityLevel}</p>
                </div>
                <div>
                  <b>Fragile:</b>
                  <p>${packages[i].isFragile}</p>
                </div>
                <div>
                  <b>Weight:</b>
                  <p>${packages[i].weight}</p>
                </div>
                <div>
                  <b>Recipient:</b>
                  <p>${packages[i].to}</p>
                </div>
              </div>
            </div>`

  }

  readOutCardDiv.innerHTML = stringInsertion

}

drawAll()

function drawCard(priority){
  let readOutCardDiv = document.getElementById('readOutDiv')

  const packagesByProperty = packages.filter(package => package.priorityLevel.includes(priority))
  //console.log(packagesByProperty.length)

  let stringInsertion = ''

  for(let i = 0; i < packagesByProperty.length; i++){
  
    stringInsertion +=

    `<div class="card text-center" style="width: 20%;">
              <div class="card-body">
                <h5 class="card-title">${packagesByProperty[i].trackingNumber}</h5>
                <div>
                  <b>Priority Level:</b>
                  <p>${packagesByProperty[i].priorityLevel}</p>
                </div>
                <div>
                  <b>Fragile:</b>
                  <p>${packagesByProperty[i].isFragile}</p>
                </div>
                <div>
                  <b>Weight:</b>
                  <p>${packagesByProperty[i].weight}</p>
                </div>
                <div>
                  <b>Recipient:</b>
                  <p>${packagesByProperty[i].to}</p>
                </div>
              </div>
            </div>`

  }

  readOutCardDiv.innerHTML = stringInsertion

}
