import React from "react";

import Link from 'next/link'

import withAuth from '../utils/auth/withAuth'

// const Example = (props) => {
//   return (
//     <div>
//       <p>
//         This page is static because it does not fetch any data or include the
//         authed user info.
//       </p>
//       <Link href={'/'}>
//         <a>Home</a>
//       </Link>
//     </div>
//   )
// }



class Example extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <p>
        This page is visible only with auth.
      </p>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    </div>
    );
  }
}

export default withAuth(Example);

// export default Example
