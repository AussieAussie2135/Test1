import tkinter as tk
from tkinter import ttk
import random
import math

class MathQuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("National 5 Math Quiz")
        self.root.configure(bg="white")  # Set background color

        self.create_widgets()

        self.current_quiz = []
        self.current_question_index = 0

    def create_widgets(self):
        self.root.geometry("300x400")  # Set window size

        self.topic_label = ttk.Label(self.root, text="Choose a math topic:", font=("Helvetica", 12))
        self.topic_label.pack(pady=10)

        self.topic_combobox = ttk.Combobox(self.root, values=["Algebra", "Geometry", "Trigonometry", "Pythagoras", "Quadratic Equations", "Circle Properties", "Percentage", "Probability"])
        self.topic_combobox.pack()

        self.num_questions_label = ttk.Label(self.root, text="Enter the number of questions:", font=("Helvetica", 12))
        self.num_questions_label.pack(pady=5)

        self.num_questions_entry = ttk.Entry(self.root, font=("Helvetica", 12))
        self.num_questions_entry.pack()

        self.generate_button = ttk.Button(self.root, text="Start Quiz", command=self.start_quiz, style="QuizButton.TButton")
        self.generate_button.pack(pady=10)

        self.reset_button = ttk.Button(self.root, text="Reset Quiz", command=self.reset_quiz, style="QuizButton.TButton")
        self.reset_button.pack(pady=10)

        self.question_label = ttk.Label(self.root, text="", wraplength=500, font=("Helvetica", 14, "bold"))
        self.question_label.pack(pady=10)

        self.answer_entry = ttk.Entry(self.root, font=("Helvetica", 12))
        self.answer_entry.pack()

        self.submit_button = ttk.Button(self.root, text="Submit Answer", command=self.submit_answer, style="QuizButton.TButton")
        self.submit_button.pack(pady=10)

        self.result_label = ttk.Label(self.root, text="", font=("Helvetica", 12, "bold"))
        self.result_label.pack(pady=10)

        # Create a custom style for buttons
        self.style = ttk.Style()
        self.style.configure("QuizButton.TButton", font=("Helvetica", 12), background="green", foreground="white")

    def start_quiz(self):
        topic = self.topic_combobox.get()
        num_questions = int(self.num_questions_entry.get())

        self.current_quiz = self.generate_questions(topic, num_questions)
        self.current_question_index = 0

        self.show_current_question()

    def reset_quiz(self):
        self.current_quiz = []
        self.current_question_index = 0
        self.question_label.config(text="")
        self.answer_entry.delete(0, tk.END)
        self.result_label.config(text="", foreground="green")
        self.answer_entry.config(state=tk.NORMAL)
        self.submit_button.config(state=tk.NORMAL)

    def generate_questions(self, topic, num_questions):
        questions = []
        for _ in range(num_questions):
            if topic == "Algebra":
                question, answer = self.generate_algebra_question()
            elif topic == "Geometry":
                question, answer = self.generate_geometry_question()
            elif topic == "Trigonometry":
                question, answer = self.generate_trigonometry_question()
            elif topic == "Pythagoras":
                question, answer = self.generate_pythagoras_question()
            elif topic == "Quadratic Equations":
                question, answer = self.generate_quadratic_equations_question()
            elif topic == "Circle Properties":
                question, answer = self.generate_circle_properties_question()
            elif topic == "Percentage":
                question, answer = self.generate_percentage_question()
            elif topic == "Probability":
                question, answer = self.generate_probability_question()
            else:
                print("Invalid topic selected.")
                return
            questions.append((question, answer))
        return questions

    def show_current_question(self):
        if self.current_question_index < len(self.current_quiz):
            question, _ = self.current_quiz[self.current_question_index]
            self.question_label.config(text=question)
            self.answer_entry.delete(0, tk.END)
            self.result_label.config(text="", foreground="green")
        else:
            self.question_label.config(text="Quiz completed!", foreground="blue")
            self.answer_entry.config(state=tk.DISABLED)
            self.submit_button.config(state=tk.DISABLED)

    def submit_answer(self):
        if self.current_question_index < len(self.current_quiz):
            _, correct_answer = self.current_quiz[self.current_question_index]
            user_answer = self.answer_entry.get()

            if user_answer == str(correct_answer):
                self.result_label.config(text="Correct!", foreground="green")
            else:
                self.result_label.config(text=f"Wrong! Correct answer: {correct_answer}", foreground="red")

            self.current_question_index += 1
            self.show_current_question()

    def generate_algebra_question(self):
        a = random.randint(1, 10)
        b = random.randint(1, 10)
        c = random.randint(1, 20)

        question = f"Solve for x: {a}x + {b} = {c}"
        answer = (c - b) / a

        return question, round(answer, 2)

    def generate_geometry_question(self):
        side = random.randint(5, 15)

        question = f"Calculate the area of a square with side length {side}"
        answer = side ** 2

        return question, answer

    def generate_trigonometry_question(self):
        angle = random.randint(1, 89)

        question = f"Find the value of sin({angle}°)"
        answer = round(math.sin(math.radians(angle)), 2)

        return question, answer

    def generate_pythagoras_question(self):
        a = random.randint(3, 15)
        b = random.randint(4, 16)

        question = f"Find the length of the hypotenuse in a right triangle with legs {a} and {b}"
        answer = round(math.sqrt(a ** 2 + b ** 2), 2)

        return question, answer

    def generate_quadratic_equations_question(self):
        a = random.randint(1, 5)
        b = random.randint(-10, 10)
        c = random.randint(-10, 10)

        question = f"Solve for x: {a}x^2 + {b}x + {c} = 0"
        answer = self.solve_quadratic_equation(a, b, c)

        return question, answer

    def generate_circle_properties_question(self):
        radius = random.randint(3, 10)

        question = f"Find the circumference of a circle with radius {radius}"
        answer = round(2 * math.pi * radius, 2)

        return question, answer

    def solve_quadratic_equation(self, a, b, c):
        discriminant = b ** 2 - 4 * a * c
        if discriminant >= 0:
            x1 = (-b + math.sqrt(discriminant)) / (2 * a)
            x2 = (-b - math.sqrt(discriminant)) / (2 * a)
            return f"x = {x1} or x = {x2}"
        else:
            return "No real solutions"

    def generate_percentage_question(self):
        original_value = random.randint(100, 1000)
        percentage = random.randint(10, 50)

        increase = original_value * (percentage / 100)
        question = f"Calculate {percentage}% increase of {original_value}"
        answer = round(original_value + increase, 2)

        return question, answer

    def generate_probability_question(self):
        outcome = random.choice(["heads", "tails"])
        question = f"What is the probability of getting {outcome} when flipping a fair coin?"
        answer = "0.5" if outcome == "heads" else "0.5"

        return question, answer

if __name__ == "__main__":
    root = tk.Tk()
    app = MathQuizApp(root)
    root.mainloop()