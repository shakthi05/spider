a=int(input())
if (a<=0):
  print("NULL")
elif(a>0):
  for i in range(1,a+1):
   if i==a:
     print(i*9)
   else:
     print(i*9,end=" ")
