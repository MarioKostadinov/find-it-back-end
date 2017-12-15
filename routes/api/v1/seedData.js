let blogs = [
  {
    "authorId": "5a2bbfc63dd8894107593d20",
    "title"   : "First blog",
    "thumbnail" : "https://images.unsplash.com/photo-1469204691332-56e068855403?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    "topic": "Adventure",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu orci vitae nulla placerat ornare ut at elit. Nulla venenatis ultricies velit, id ultrices lectus pharetra quis. Quisque hendrerit neque id sollicitudin ornare.\n Pellentesque interdum, tellus in eleifend pharetra, urna nisl porttitor lectus, eu egestas turpis nisl eu ante. Donec pharetra orci id est laoreet, eget rutrum ante dapibus. Nam rhoncus ut justo in accumsan. Nam vel tellus vel lorem accumsan fermentum. Morbi et egestas ligula, id tincidunt lectus. Morbi sodales mi nisi, accumsan blandit metus convallis vel."
  }
];

let users = [
  {
    "firstName": "John",
    "surname": "Bolt",
    "email": "john@bolt.com",
    "password": "123456",
    "gender": 1
  }
];

let comments = [
  {
    "firstName": "John",
    "surname": "Bolt",
    "comment": "What na awesome blog. Keep it up!"
  }
];


let myBlog = {
        "_id": "5a3198aa36efd3360a244d1d",
        "authorName": "Mario Kostadinov",
        "views": 0,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus orci a aliquam vestibulum. Nullam rutrum tincidunt nibh, nec gravida sem sagittis eu. In hac habitasse platea dictumst. Nulla vel justo pulvinar, varius tortor eu, malesuada nulla. Nam non dui ac dui euismod volutpat. Sed sit amet odio justo. Integer volutpat ligula sit amet diam laoreet, vel dapibus risus condimentum. Vestibulum id nibh at risus tincidunt feugiat et et velit. Suspendisse sed ultrices elit, a pulvinar orci. Pellentesque quis massa non eros finibus porttitor a eu tellus.\n\nPhasellus non elementum augue. Pellentesque ultrices tristique massa nec pulvinar. Vivamus auctor ex mi, nec rutrum justo posuere eu. Maecenas ligula dolor, ultrices eget ex ut, dictum pharetra leo. Morbi eget gravida augue, id eleifend ex. Vivamus porttitor vulputate consectetur. Proin dictum ante ac consectetur luctus. Praesent cursus nec orci ac eleifend. Vivamus consectetur volutpat eros, vitae fermentum nisi commodo viverra. Suspendisse potenti. Maecenas ornare vitae ante eu luctus. Pellentesque erat lacus, ultricies ac dictum non, blandit eget lorem. Sed eget tempus mauris.\n\nNam nisl libero, ullamcorper ut mauris nec, volutpat laoreet est. Donec vitae porttitor augue. Vestibulum a nunc ac nisi volutpat aliquam. Vestibulum eu velit justo. Morbi fringilla ultricies varius. Fusce consequat mi libero, et convallis massa vulputate at. Cras mattis, orci vitae varius vestibulum, orci eros commodo nibh, at porta turpis ante id mauris. Suspendisse bibendum ante nibh, commodo interdum nisl tempor ac. Vestibulum magna mi, vulputate eget congue eu, consectetur sed eros. Cras pretium nisl ante, nec hendrerit sapien aliquet non. Quisque sit amet tempor lectus. Praesent dapibus nec nunc in efficitur.\n\nSuspendisse potenti. Integer in sapien at metus ultricies cursus. Quisque id massa felis. Pellentesque sagittis justo in tempus fringilla. Praesent aliquet quam id neque tristique consectetur. Donec lorem massa, pretium at tincidunt ac, maximus eget neque. Curabitur ante justo, hendrerit at lacinia et, egestas ut leo. Pellentesque in quam fermentum, luctus velit quis, tincidunt massa. Aliquam auctor nisi metus, nec finibus diam finibus eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nulla tortor, pulvinar vitae nulla sit amet, auctor pretium purus. Duis tellus sem, bibendum quis erat vitae, condimentum pulvinar justo. Mauris enim ex, ultrices sed elit porttitor, dictum lobortis mauris. Praesent ligula lectus, tempor non eros id, mollis scelerisque enim.\n\nPhasellus fringilla, libero in finibus pellentesque, felis libero sodales ex, et luctus lectus neque sit amet orci. Pellentesque iaculis dui sit amet lobortis mollis. Ut nec nisi a metus egestas accumsan eget non risus. Quisque facilisis elit nec purus mattis, sit amet condimentum nisi elementum. Quisque iaculis tempus pretium. Donec ultrices nisl et mauris luctus posuere. Vivamus tincidunt at velit consectetur faucibus. Ut auctor felis et velit cursus condimentum vitae ac mauris. Nullam cursus mi vitae tellus porttitor ultricies.",
        "date": "2017-12-13T22:42:59.620Z",
        "topic": "Adventure",
        "title": "What the future holds about BITCOIN",
        "authorId": "5a31986236efd3360a244d1c",
        "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=3204&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        "__v": 0,
        "comments": [
          {
            authorName: "Nikola Donchev",
            authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            body: "Boooh, terrible post!"
          },
          {
            authorName: "Atanas Bahchevanov",
            authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            body: "That's cool brah!"
          },
          {
            authorName: "Atanas Bahchevanov",
            authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            body: "That's cool brah!"
          },
          {
            authorName: "Atanas Bahchevanov",
            authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
            body: "That's cool brah!"
          },
        ]
    };
