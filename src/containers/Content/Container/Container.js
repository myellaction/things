import classNames from "classnames";

const Container = ({children, cls, isHidden=null}) => {
    return (
        <div className={classNames("container", cls)}>
            <div className={classNames("wrapper", {'wrapper_hidden': isHidden})}>
                {children}
            </div>
        </div>
    );
}

export default Container;