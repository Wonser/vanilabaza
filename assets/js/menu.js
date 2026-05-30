const MENU = [
  {
    title: "Сообщество",
    items: [
      {
        title: "Новости и события",
        url: "#"
      },
      {
        title: "Журнал событий",
        url: "#"
      },
      {
        title: "Медиа",
        url: "#"
      },
      {
        title: "Стримеры",
        url: "#"
      },
      {
        title: "Рекрутинг",
        url: "#"
      },
    ]
  },

  {
    title: "Концепция",
    items: [
      {
        title: "Vanilla",
        url: "#"
      },
      {
        title: "Osaka",
        url: "#",
        badge: "NEW"
      }
    ]
  },

  {
    title: "База знаний",
    items: [
      {
        title: "Предметы",
        children: [
          { title: "Оружие", url: "#" },
          { title: "Броня", url: "#" }
        ]
      },
      {
        title: "Умения",
        children: [
          { title: "Люди", url: "#" },
          { 
            title: "Эльфы",
            children: [
              { 
                title: "Светлый воин", 
                children: [
                  { 
                    title: "Светлый рыцарь", 
                    children: [
                      { title: "Рыцарь Евы", url: "#" },
                      { title: "Менестрель", url: "#" },
                    ]
                  },
                  { title: "Разведчик", url: "#" },
                ]
              },
              { title: "Светлый мистик", url: "#" },
              { title: "Странник смерти", url: "#" },
            ]
          },
          { title: "Темные эльфы", url: "#" },
          { title: "Орки", url: "#" },
          { title: "Гномы", url: "#" },
          { title: "Камаэль", url: "#" },
          { title: "Сильфы", url: "#" },
          { title: "Высшие эльфы", url: "#" },
        ]
      },
      {
        title: "Монстры и NPC",
        children: [
          { title: "Монстр", url: "#" },
        ]
      },
      {
        title: "Локации",
        children: [
          { title: "Локация 1", url: "#" },
        ]
      },
      {
        title: "Механики",
        children: [
          { title: "Механика 1", url: "#" },
        ]
      },
      {
        title: "Статьи",
        children: [
          { title: "Статья", url: "#" },
        ]
      },
      {
        title: "Новости",
        children: [
          { title: "Новость", url: "#" },
        ]
      },
      {
        title: "Магазин L",
        children: [
          { title: "Магазин L 2", url: "#" },
        ]
      },
      {
        title: "Гайды",
        children: [
          { title: "Гайд 1", url: "#" },
        ]
      },
    ]
  }
];

const MENU2 = [
  {
    title: "Предметы",
    items: [
      {
        title: "Предмет 1",
        url: "#"
      },
      {
        title: "Предмет 2",
        url: "#",
      }
    ]
  },

  {
    title: "Умения",
  },

  {
    title: "Монстры и NPC",
  },

  {
    title: "Локации",
  },

  {
    title: "Механики",
    items: [
      {
        title: "Люди",
        url: "#",
      },
      {
        title: "Эльфы",
        children: [
          { 
            title: "Светлый воин",
            children: [
              { 
                title: "Светлый рыцар", 
                children: [
                  { 
                    title: "Рыцарь Евы", 
                    children: [
                      { title: "Хамовник Евы", url: "#" },
                    ]
                  },
                  { title: "Менестрель", url: "#" },
                ]
              },
              { title: "Разведчик", url: "#" },
            ]
          },
          { 
            title: "Светлый мистик", 
            children: [
              { title: "Менестрель", url: "#" },
            ]
          },
          { title: "Странник смерти", url: "#" },
        ]
      },
      {
        title: "Темные эльфы",
        url: "#",
      },
      {
        title: "Орки",
        url: "#",
      },
      {
        title: "Гномы",
        url: "#",
      },
      {
        title: "Камаэль",
        url: "#",
      },
      {
        title: "Сильфы",
        url: "#",
      },
      {
        title: "Высшие эльфы",
        url: "#",
      },
    ]
  },

  {
    title: "Статьи",
  },

  {
    title: "Новости",
  },

  {
    title: "Магазин L",
  },

  {
    title: "Гайды",
  },
];