let a=[1,6,4,7,3]

function func(a)
      {
      for (let i = 0; i < a.length-1; i++)
      {
            let min = i;
            for (let j = i + 1; j < a.length; j++)
            {
               if (a[j] < a[min])
               {
                  min = j;
               }
            }
            let dummy = a[i];
            a[i] = a[min];
            a[min] = dummy;
         }
      return a;
}
a=func(a)

// сортує від найменшого