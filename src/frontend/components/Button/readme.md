Стили для кнопки

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: 1px solid var(--color-poppy);
    background-color: var(--color-poppy);
    padding: var(--small) var(--medium);
    font-size: var(--f-small);
    transition: all 0.15s ease-in-out;
}

.button:hover {
    background-color: var(--hover-poppy);
    border-color: var(--hover-poppy);
}