import img1 from '../assets/image/img1.png'
import img2 from '../assets/image/img2.png'
import img3 from '../assets/image/img3.png'
import img4 from '../assets/image/img4.png'
import img5 from '../assets/image/img5.png'
import img6 from '../assets/image/img6.png'
import img7 from '../assets/image/img7.png'
import img8 from '../assets/image/img8.png'
import img9 from '../assets/image/img9.png'



export const links = [
    {
      name: "Services \u25BE",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: 'Send Money', link: "/", img:img1},
            { name: 'Cashout', link: "/", img:img2 },
            { name: 'Payment', link: "/", img:img3 },
            { name: 'Add Money', link: "/", img:img4 },
          ],
        },
        {
          sublink: [
            { name: 'Mobile Recharge', link: "/", img:img5 },
            { name: 'Education Fees', link: "/", img:img6},
            { name: 'Pay Bill', link: "/" , img:img7},
            { name: 'Loan', link: "/", img:img8 },
          ],
        },
        {
          sublink: [
            { name: 'Savings', link: "/" , img:img9},
            { name: 'Request Money', link: "/" , img:img2},
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