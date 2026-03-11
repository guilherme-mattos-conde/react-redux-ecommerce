const SvgButton = ({ imagem, imagemHover, ...props }) => {
    return (
        <button className="svg-button" {...props}>
            <img src={imagem} className="icon-default" />
            <img src={imagemHover} className="icon-hover" />
        </button>
    );
};

export default SvgButton;
