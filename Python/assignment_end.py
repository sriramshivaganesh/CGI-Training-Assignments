# 1
def list_intersection(list1, list2):
    l = []
    for i in list1:
        if i in list2:
            l.append(i)
    return l


list1 = [11, 76, 34, 96, 73, 27, 65, 10]
list2 = [11, 65, 34, 89, 21, 24, 30]

print(list_intersection(list1, list2))


# 2
def count_words(sen):
    return len(sen.split())


print(count_words("hi my name is Rahul Kumar"))


# 3
def reverse_string(s):
    rs = ""
    for i in range(len(s)):
        rs = rs + s[len(s) - i - 1]
    return rs


print(reverse_string("Alice is good"))


# 4
def largest_list(listt):
    if listt == []:
        return 0
    maxx = listt[0]

    for i in listt:
        maxx = max(maxx, i)

    return maxx


print(largest_list([1, 2, 3, 4, 5, 6, 7, 8, 9]))


# 5
def prime_factors(num):
    for i in range(1, num + 1):
        if num % i == 0:
            print(i)


prime_factors(24)


# 6
def merge_2_list(arr1, arr2):
    merged = []
    i, j = 0, 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1

    while i < len(arr1):
        merged.append(arr1[i])
        i += 1

    while j < len(arr2):
        merged.append(arr2[j])
        j += 1

    return merged


# Example input arrays
array1 = [1, 3, 5, 7]
array2 = [2, 4, 6, 8]
merged_array = merge_2_list(array1, array2)
print(merged_array)
