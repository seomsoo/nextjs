// import { fireEvent, render, screen } from "@testing-library/react";
// import { Input } from ".";
// test("인풋 컴포넌트 미입력 시 x 버튼이 보이지 않아야 한다.", () => {
//   render(<Input />);

//   const input = screen.getByRole("textbox");
//   const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" });

//   // 입력값이 없고
//   expect(input).toHaveValue("");
//   // x 버튼이 보이지않아야한다
//   expect(deleteButton).not.toBeInTheDocument();
// });

// test("Input 컴포넌트에 입력값이 있을 때 X 버튼이 보이는지 확인한다.", () => {
//   render(<Input defaultValue="입력값" />);

//   const input = screen.getByRole("textbox");
//   const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

//   // 입력값이 있고,
//   expect(input).toHaveValue("입력값");
//   // X 버튼이 보인다.
//   expect(deleteButton).toBeInTheDocument();
// });

// test("x 버튼 입력시 입력값이 지워지는지 확인한다", () => {
//   render(<Input defaultValue="입력값" />);

//   const input = screen.getByRole("textbox");
//   const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

//   fireEvent.click(deleteButton);

//   expect(input).toHaveValue("");
//   expect(deleteButton).not.toBeInTheDocument();
// });
