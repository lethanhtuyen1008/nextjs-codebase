import * as React from "react";

const Layout = (props: { children: any }) => {
    const { children } = props;
    return (
        <div>
            <div>header</div>
            {children}
            <div>footer</div>
        </div>
    );
};

export default Layout;
