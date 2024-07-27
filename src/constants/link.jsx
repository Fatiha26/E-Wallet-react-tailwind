import img1 from '../assets/image/img1.png'

export const links = [
    {
      name: "Services",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: 'Send Money', link: "/", img:img1},
            { name: 'Cashout', link: "/" },
            { name: 'Payment', link: "/" },
            { name: 'Add Money', link: "/" },
          ],
        },
        {
          sublink: [
            { name: 'Mobile Recharge', link: "/" },
            { name: 'Education Fees', link: "/" },
            { name: 'Pay Bill', link: "/" },
            { name: 'Loan', link: "/" },
          ],
        },
        {
          sublink: [
            { name: 'Savings', link: "/" },
            { name: 'Request Money', link: "/" },
          ],
        },
      ],
    },
    { name: "Business" },
    { name: "Help" },
    { name: "Career" },
    { name: "Blog" },
    { name: "Campaigns" },
  ];