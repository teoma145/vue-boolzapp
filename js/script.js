const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeindex:0,
            sendmsg:"",
            filtercontact:"",
            filteredContacts:this.contact,
            messageindex:null,
            showchat:false,
            microphone:true,
    };
    
},
  methods: {
    ChangeActiveUser(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
          this.activeindex = index;
          console.log(this.activeindex)
        }
        this.showchat=true;
      },
    addmessage(){
        if (this.sendmsg !== ''){
        console.log(this.sendmsg)
        const dataoggi = new Date;
        const dataString = dataoggi.toString();
        const ora = dataString.slice(16, 21);
        const mese = dataoggi.getMonth() + 1
        const giorno = dataString.slice(8, 10);
        const anno = dataoggi.getFullYear();
        const newMessage = {
            date:giorno+'/'+mese+'/'+anno +' '+ora,
            message: this.sendmsg,
            status: 'sent' 
          };
          this.contacts[this.activeindex].messages.push(newMessage);
        
        
        
         
          
        setTimeout(() => {
            
            const dataoggi = new Date;
            const dataString = dataoggi.toString();
            const ora = dataString.slice(16, 21);
            const mese = dataoggi.getMonth() + 1
            const giorno = dataString.slice(8, 10);
            const anno = dataoggi.getFullYear();
            const userMessage = {
                date:giorno+'/'+mese+'/'+anno +' '+ora,
              message: 'Senti al momento non posso rispondere,non vedi che ci hanno invaso gli alieni?!',
              status: 'received'
            };
            this.contacts[this.activeindex].messages.push(userMessage);
          }, 1000);
          this.sendmsg = '';
          
          this.$nextTick(() => {
            const messageContainer = this.$refs.messageContainer;
            messageContainer.scrollTop = messageContainer.scrollHeight;
          });
          setTimeout(() => {
          this.$nextTick(() => {
            const messageContainer = this.$refs.messageContainer;
            messageContainer.scrollTop = messageContainer.scrollHeight;
          });
        },1003);
        this.microphone=true
        
    }
},

    openoption(index){
        if (this.messageindex === index) {
            this.messageindex = null; 
        } else {
            this.messageindex = index; 
        }
    },
    eliminamsg(index){
    this.contacts[this.activeindex].messages.splice(index,1);
    this.messageindex=null;
    },

    filterContacts() {
        const searchcontact = this.filtercontact.toLowerCase();
        this.filteredContacts = this.contacts.filter(contact => {
            const contactName = contact.name.toLowerCase();
            return contactName.startsWith(searchcontact);
        });
    },
    hideMicrophone() {
        if (this.sendmsg.length > 0) {
            this.microphone = false;
        } else {
            this.microphone = true;
        }
    },
    
},
  
created() {
    this.filterContacts();
},



}).mount('#app');