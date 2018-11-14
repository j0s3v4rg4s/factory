import React from 'react';
import Link from 'next/link';
import Firebase from '../core/lib/firebase';

class Index extends React.Component<{ firebaseInstance: Firebase }> {
    render() {
        return <div>hola</div>;
    }
}

export default Index;

// export default () => (
//     <div>
//         <ul>
//             <h1>hola 3</h1>
//             <li>
//                 <Link href="/a" as="/a">
//                     <a>a</a>
//                 </Link>
//             </li>
//             <li>
//                 <Link href="/b" as="/b">
//                     <a>b</a>
//                 </Link>
//             </li>
//         </ul>
//     </div>
// );
