#dict of boks and authors
books = {"The Indian Story": "Bimal Jalal", "Lal Salam": "Smriti Irani", "Hear Yourself": "Prem Rawat"}

#adding  new entry
books["The Tiger"] = "Napolean"

#updating
books["Bimal Jalal"] = "Laal Salam"

#looping and printing
for k,v in books.items():
    print(k + " : " + v)




