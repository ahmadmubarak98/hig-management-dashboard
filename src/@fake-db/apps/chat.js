import mock from "../mock"

// Contact
let data = {
  contacts: [
    {
      uid: 1,
      displayName: "Ahmad Mubarak",
      about:
        "A Jordanian developer currently moving to Oman.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-1.jpg"),
      status: "offline"
    },
    {
      uid: 2,
      displayName: "Suzan Jamal",
      about:
        "Lorem ipsum dolor sit amit.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
      status: "do not disturb"
    },
    {
      uid: 3,
      displayName: "Mohammad Hamdan",
      about:
        "Lorem ipsum dolor sit amit.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
      status: "do not disturb"
    },
    {
      uid: 4,
      displayName: "Raad Haleeq",
      about:
        "Lorem ipsum dolor sit amit.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-5.jpg"),
      status: "do not disturb"
    },
    {
      uid: 5,
      displayName: "Marah Awwad",
      about:
        "Lorem ipsum dolor sit amit.",
      photoURL: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
      status: "online"
    }
  ],
  chats: {
    1: {
      isPinned: true,
      msg: [
        {
          textContent: "السلام عليكم, بسأل عن البيت اللي في منطقة صلالة شارع الستين عمارة 19!",
          time: "Mon Dec 21 2020 07:45:00 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent:
            "وعليكم السلام",
          time: "Mon Dec 21 2020 07:45:23 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "البيت محجوز حالياً للاسف",
          time: "Mon Dec 21 2020 07:45:55 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "شكراً 👍.",
          time: "Mon Dec 21 2020 07:47:00 GMT+0000 (GMT)",
          isSent: false,
          isSeen: false
        }
      ]
    },
    2: {
      isPinned: false,
      msg: [
        {
          textContent: "Hi",
          time: "Mon Dec 21 2020 07:45:00 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent: "Hello. How can I help You?",
          time: "Mon Dec 22 2020 07:45:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent:
            "Can I get details of my last transaction I made last month?",
          time: "Mon Dec 22 2020 07:46:10 GMT+0000 (GMT)",
          isSent: true,
          isSeen: true
        },
        {
          textContent:
            "We need to check if we can provide you such information.",
          time: "Mon Dec 22 2020 07:45:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "I will inform you as I get update on this.",
          time: "Mon Dec 22 2020 07:46:15 GMT+0000 (GMT)",
          isSent: false,
          isSeen: true
        },
        {
          textContent: "If it takes long you can mail me at my mail address",
          time: "Mon Dec 22 2020 07:46:20 GMT+0000 (GMT)",
          isSent: true,
          isSeen: false
        }
      ]
    }
  }
}

// GET : CHATS AND CONTACTS
mock.onGet("/api/app/chat/chats").reply(() => {
  return [200, data]
})

// GET : CHAT LIST
mock.onGet("/api/app/chat/chat-contacts").reply(request => {
  const chatContactsArray = data.contacts.filter(contact => {
    if (data.chats[contact.uid]) return data.chats[contact.uid]
    else return null
  })

  return [200, chatContactsArray]
})

// POST : SEND MESSAGE
mock.onPost("api/app/chat/send-message").reply(request => {
  let reqdata = JSON.parse(request.data)
  const { contactId, message, isPinned } = reqdata
  if (data.chats[contactId]) {
    data.chats[contactId].msg.push(message)
  } else {
    let newMsg = {
      [contactId]: {
        isPinned: isPinned,
        msg: [message]
      }
    }
    Object.assign(data.chats, newMsg)
  }
  return [200]
})
mock.onPost("/api/apps/chat/mark-all-seen/").reply(request => {
  let contactId = JSON.parse(request.data).contactId

  // Get chat data
  let marked = data.chats[contactId]

  marked !== undefined &&
    marked.msg.forEach(msg => {
      msg.isSeen = true
    })

  return [200]
})
// POST : TOGGLE PINNED
mock.onPost("/api/apps/chat/set-pinned/").reply(request => {
  let { contactId, value } = JSON.parse(request.data)
  data.chats[contactId].isPinned = data.chats[contactId].isPinned = value
  return [200]
})
