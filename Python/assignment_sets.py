#set of programming languages
prog_langs = {"python", "java", "C++", "C"}

#addding a new programming language
prog_langs.add("javascript")

#removing a language
prog_langs.remove("java")

#checking if python is present
print("is python in the set", "python" in prog_langs)

#2nd set
prog_langs2 = {"python", "java", "C#"}

#intersection
intersection = prog_langs.intersection(prog_langs2)
print(intersection)
