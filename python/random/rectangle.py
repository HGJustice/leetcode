class Rectangle:
    def __init__(self, init_width, init_height):
        self.width = init_width 
        self.height = init_height

    @property
    def width(self):
        return self._width
    
    @width.setter
    def width(self, new_width):
        if isinstance(new_width, int) and new_width > 0:
            self._width = new_width
        else:
            raise ValueError("Please enter a number and make sure its higher then 0")

    @property 
    def height(self):
        return self._height
    
    @height.setter
    def height(self, new_height):
        if isinstance(new_height, int) and new_height > 0:
            self._height = new_height
        else:
            raise ValueError("Please enter a number and make sure its higher then 0")

    def area(self):
        return self.height * self.width
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def __str__(self):
        return "Rectengle width is {0} and {1}".format(self.width, self.height)



k = "hello"

rec1 = Rectangle(k, 10)
print(rec1)

