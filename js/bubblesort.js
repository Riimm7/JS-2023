let a=[1,6,4,7,3]

function func( a)
    {
        let temp;
        for (let i = 0; i < a.length; i++)
        {
            for (let j = a.length - 1; j > i; j--)
            {
                if (a[j] < a[j - 1])
                {
                    temp = a[j];
                    a[j] = a[j - 1];
                    a[j - 1] = temp;
                }
            }
        }
    return a;   
    }
a= func(a)

// порівнює 2 числа і переставляє так щоб менше було зліва