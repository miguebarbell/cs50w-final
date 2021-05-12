import secrets


def generate(len=8, esp=False):
    """
    generate a random string from upper lower letters, numbers and character (optional).
    Default is return a string with at least one uppercase, one lowercase and three digits.
    return a string
    """
    lower_letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z',
                     'x', 'c', 'v', 'b', 'n', 'm']
    upper_letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z',
                     'X', 'C', 'V', 'B', 'N', 'M']
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    characters = ['_', '-', ',', '.', ';', ':', "'", '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    pool = lower_letters + upper_letters + numbers
    password = str()
    if esp:
        pool += characters
        while True:
            password = ''.join(secrets.choice(pool) for _ in range(len))
            if (any(c.islower() for c in password)
                    and any(c.isupper() for c in password)
                    and sum(c.isdigit() for c in password) >= 3
                    and any(c in password for c in characters)):
                break
    else:
        while True:
            password = ''.join(secrets.choice(pool) for _ in range(len))
            if (any(c.islower() for c in password)
                    and any(c.isupper() for c in password)
                    and sum(c.isdigit() for c in password) >= 3):
                break

    return password
