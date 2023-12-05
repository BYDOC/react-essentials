export default function Tabs({ children, buttons, buttonsContainer="menu" }) {
    // Tabs componenetından buttonsContainer'a wrapper olarak göndermek istenilen html elementinin ismi giriliyor
    // Bu deger büyük harfle baslayan bir const'a atanıyor.
    // Bu const sonradan aşağıdaki gibi kullanılabilir
    const ButtonContainer=buttonsContainer;
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>)
}