/* 
Note - Can solve in any language
Sample Input 1:
		Enter the string : racecar
Sample Output 1:
					e
				c		c
			a				a
		r						r
			a				a
				c		c
					e
Sample Input 2 :
		Enter the string : football
Sample Output 2:
		Not Possible */
		
name='yashwantha'
mid=((len(name)-1)/2)
mid1=((len(name)-1)%2)
mid=int(mid)

if mid1 == 0:
  for i in range(mid+1):
    l=mid-i
    m=mid+i
    for i in range(len(name)):
      if l == i or m == i:
        print(name[i],end=" ")
      else:
        print('  ',end=" ")
    print('\n')

  for i in range(mid-1,-1,-1):
    l=mid-i
    m=mid+i  
    for i in range(len(name)-2,-1,-1):
      if l == i or m == i:
        print(" ",name[i],end=" ")
      else:
        print('  ',end=" ")
    print('\n')
else:
  print('Not possible')
