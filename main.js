document.addEventListener('DOMContentLoaded',()=>{
  class pagination{
    constructor(){
      this.currentpage = 1
      this.letterList = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m",
      "n","o","p","q","r","s","t","u","v","w","x","y","z",
      ];
      this.pageinfo= document.querySelector('#pageInfo')
      this.createletter(this.letterList,this.tr,this.td,this.textnode,this.placelettres)
      this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
      this.affichernumerodepage()
      
    }
    createletter(letterList,tr,td,textnode,placelettres){
  
    placelettres = document.querySelector('#letterList')
    letterList.forEach(element => {

      tr = document.createElement('tr')    
      td = document.createElement('td')
      textnode= document.createTextNode(element)
      td.appendChild(textnode)
      tr.appendChild(td)
      placelettres.appendChild(tr)
        
      });

    }
    showletter(tdall,currentpage,indexdébut,indexfin){
    if(!tdall){
      tdall=document.querySelectorAll('td')
    }
      indexdébut=(currentpage-1)*5
      indexfin=(currentpage*5)-1
      // console.log(indexdébut)
      // console.log(indexfin)
      tdall.forEach((element,index) => {
        if(index>=indexdébut && index<=indexfin){
          element.style.display=''
        }
        else{
          element.style.display='none'
        }        
      });

    }
    // Code
    firstPage() {
    this.currentpage=1
    this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
    this.affichernumerodepage()
    }

    previous() {
    // console.log('previous')
    
    if(this.currentpage>1){
      this.currentpage-=1
      this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
      this.affichernumerodepage()
    }
    else{
    
      this.currentpage=6
      this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
      this.affichernumerodepage()
    }
    // console.log(this.currentpage)
    
    }

    nextPage() {
    
      if(this.currentpage<6){
        this.currentpage+=1
        this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
        this.affichernumerodepage()

      }
      else{
        this.currentpage=1
        this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
        this.affichernumerodepage()
      }
    }

    lastPage() {
    this.currentpage=6
    this.showletter(this.tdall,this.currentpage,this.indexdébut,this.indexfin)
    this.affichernumerodepage()
    }
    affichernumerodepage(){
    if(this.pageinfo){
      this.pageinfo.innerText=`${this.currentpage}`+'/6'
    }
  }

  }
  // new pagination()
   window.page=new pagination()
  
  
})