const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'all_calls',
          title: 'All Calls',
          type: 'item',
          icon: 'feather icon-home',
          url: '/all-calls'
        },
        // {
        //   id: 'ticker_list',
        //   title: 'Ticker List',
        //   type: 'item',
        //   icon: 'feather icon-home',
        //   url: '/ticker-list'
        // },
        {
          id: 'prior_ticker_list',
          title: 'Prior Ticker List',
          type: 'item',
          icon: 'feather icon-home',
          url: '/prior-ticker-list'
        }
      ]
    }
  ]
};

export default menuItems;
