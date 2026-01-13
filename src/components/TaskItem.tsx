export function TaskItem({ text, isDesktop = false }: { text: string; isDesktop?: boolean }) {
  const textSize = isDesktop ? "text-xl" : "text-base";
  
  return (
    <p className={`font-inter font-light ${textSize} text-todo-dark underline decoration-1 underline-offset-2`}>
      {text}
    </p>
  );
}
